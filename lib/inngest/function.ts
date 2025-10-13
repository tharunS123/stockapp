import {inngest} from "@/lib/inngest/client";
import {PERSONALIZED_WELCOME_EMAIL_PROMPT} from "@/lib/inngest/prompts";
import {sendWelcomeEmail} from "@/lib/nodemailer";

export const sendSignUpEmail = inngest.createFunction(
    { id: 'sign-up-email' },
    { event: 'app/user.created'},
    async ({ event, step }) => {
        const userProfile = `
            - Country: ${event.data.country}
            - Investment goals: ${event.data.investmentGoals}
            - Risk tolerance: ${event.data.riskTolerance}
            - Preferred industry: ${event.data.preferredIndustry}
        `
        const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace('{{userProfile}}', userProfile)

        const response = await step.ai.infer("generate-welcome-intro", {
          model: step.ai.models.openai({
            model: "nvidia/nemotron-nano-9b-v2:free",
            apiKey: process.env.OPENROUTER_API_KEY!,
            baseUrl: "https://openrouter.ai/api/v1/",
          }),
          body: {
            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],
          },
        });
        await step.run('send-welcome-email', async () => {
            const choice = response.choices?.[0];
            const introText = choice?.message?.content || 'Thanks for joining Signalist. You now have the tools to track markets and make smarter moves.'

            const { data: { email, name } } = event;
            return await sendWelcomeEmail({ email, name, intro: introText });
        })

        return {
            success: true,
            message: 'Welcome email sent successfully'
        }
    }
)