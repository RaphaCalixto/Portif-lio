
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Recebendo requisição...')
    
    const { name, email, subject, message } = await req.json()
    console.log('Dados recebidos:', { name, email, subject })

    // Validação básica
    if (!name || !email || !subject || !message) {
      console.log('Validação falhou - campos obrigatórios')
      return new Response(
        JSON.stringify({ error: 'Todos os campos são obrigatórios' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Verificar se a API key está configurada
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY não está configurada')
      return new Response(
        JSON.stringify({ error: 'Configuração de email não encontrada' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('Preparando dados do email...')
    
    // Usar Resend para enviar o e-mail - usando o email correto da conta
    const emailData = {
      from: 'onboarding@resend.dev', // Email padrão do Resend
      to: ['naodrezzy@outlook.com'], // Email correto (minúsculo)
      subject: `Novo contato: ${subject}`,
      html: `
        <h2>Nova mensagem do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    }

    console.log('Enviando email via Resend...')

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    console.log('Status da resposta Resend:', response.status)
    
    const responseData = await response.text()
    console.log('Resposta Resend:', responseData)

    if (response.ok) {
      console.log('Email enviado com sucesso!')
      return new Response(
        JSON.stringify({ message: 'E-mail enviado com sucesso!' }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    } else {
      console.error('Erro na API Resend:', response.status, responseData)
      return new Response(
        JSON.stringify({ 
          error: 'Erro ao enviar e-mail', 
          details: responseData 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

  } catch (error) {
    console.error('Erro geral:', error)
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
