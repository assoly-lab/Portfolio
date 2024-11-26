import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";



export default function Contact(){
    const publicKey = process.env.EMAILJS_PUBLIC_KEY
    const templateId = process.env.TEMPLATE_ID
    const serviceId = process.env.SERVICE_ID
    const t = useTranslations("contact")


    return (
        <>
            <Reveal x={-100} opacity={0} >
                <h1 id='contact' className="relative text-4xl font-semibold z-20 w-fit ">{t("title")}
                    <span className="absolute top-6 left-1 w-full h-6 bg-[#86A0ED] -z-10"></span>
                </h1>
                <div className="flex flex-col items-center mt-12 gap-6">
                    <p className="text-3xl font-semibold">{t("description.title")}</p>
                    <p className="text-base md:text-2xl">{t("description.part-one")} <span className="text-[#8A3FFC] font-semibold">{t("description.email")}</span>{t("description.part-two")} </p>
                    <ContactForm  publicKey={publicKey} templateId={templateId} serviceId={serviceId} />
                </div>
            </Reveal>
        </>
    )
}