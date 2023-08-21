import React from "react";
import { useTheme } from "next-themes";
import Testimonials from "./Testimonials";

export default function Thinkific() {
    const { theme } = useTheme()
    return (
        <section className="bg-white dark:bg-gray-800">
            <header className="max-w-6xl mx-auto my-10 bg-white dark:bg-gray-800">
                <h3 className="text-2xl md:text-5xl text-center font-black mx-20 my-10 md:leading-relaxed">
                    Professional Full Stack Developer with 5+ Years Expereince in Robust Full Stack Application Development
                </h3>
            </header>
            <div className="block py-6 md:-my-4 md:py-0">
                <svg className="animate-bounce mx-auto w-6 h-6 text-amber-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900">
                <div className="max-w-6xl mx-auto p-20 dark:bg-gray-900">
                    <p className="text-lg text-center pb-10">
                        As a Professional Full Stack Developer, I can develop complex custom applications which are crucial for your business needs. With Full Stack Development Skills I can create robust, modern applications for your business which will help you achieve your goals with modern technology stack.
                    </p>
                    <div className="flex flex-col md:flex-row justify-around py-6 mt-4 border-4 border-white">
                        <div>
                            <p className="text-3xl font-black md:text-5xl py-2">
                                100+
                            </p>
                            Custom Apps Developed
                        </div>
                        <p className="border-b-4 w-full md:border-l-4 border-white md:h-24 md:w-0" />
                        <div>
                            <p className="text-3xl font-black md:text-5xl py-2">
                                30+
                            </p>
                            Happy Clients
                        </div>
                        <p className="border-b-4 w-full md:border-l-4 border-white md:h-24 md:w-0" />
                        <div>
                            <p className="text-3xl font-black md:text-5xl py-2">
                                5+
                            </p>
                             Years Experience
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto p-20 text-center">
                <h3 className="text-4xl md:text-6xl font-black py-10">
                    Happy Clients
                    <span className="block w-1/6 mx-auto border-b-4 border-[#3B82F6] pt-4"></span>
                </h3>
                <Testimonials />
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900">
                <div className="max-w-6xl mx-auto p-20 text-center">
                    <h3 className="text-4xl md:text-6xl font-black py-10">
                        Full Stack Services
                        <span className="block w-1/6 mx-auto border-b-4 border-[#3B82F6] pt-4"></span>
                    </h3>
                    <div className="grid grid-cols-2">
                        <div className="m-4">
                            <h1 className="text-2xl font-bold py-4">
                                Custom Apps
                            </h1>
                            <span className="block w-1/6 mx-auto border-b-2 border-[#F59E0B]"></span>
                            <p className="text-lg py-4">
                                I can develop a complete solution for any of your custom needs. I can develop Apps through APIs and Full Stack skills.
                            </p>
                        </div>
                        <div className="m-4">
                            <h1 className="text-2xl font-bold py-4">
                                Design & Development
                            </h1>
                            <span className="block w-1/6 mx-auto border-b-2 border-[#F59E0B]"></span>
                            <p className="text-lg py-4">
                                I can reimagine the design of your website according to your needs. I can implement any technical new feature you need which requires complex programming knowledge and expereince.
                            </p>
                        </div>
                        <div className="m-4">
                            <h1 className="text-2xl font-bold py-4">
                                3rd Party Integrations
                            </h1>
                            <span className="block w-1/6 mx-auto border-b-2 border-[#F59E0B]"></span>
                            <p className="text-lg py-4">
                                I can integrate your  data with any of your current services like CRM, Zapier, Payment Automation Vendors etc.
                            </p>
                        </div>
                        <div className="m-4">
                            <h1 className="text-2xl font-bold py-4">
                                SSO Logins
                            </h1>
                            <span className="block w-1/6 mx-auto border-b-2 border-[#F59E0B]"></span>
                            <p className="text-lg py-4">
                                Need SSO login for your customers? I can help you offer multiple login & registration options for your customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center my-10 lg:my-20">
                    <img
                        className="lg:block w-1/3 rounded-md mx-auto shadow-md"
                        src="/avatar.jpeg"
                    />
                    <div className="p-4 lg:p-20 lg:ml-20">
                        <h3 className="text-3xl lg:text-5xl font-bold">
                            Why Hire Me?
                        </h3>
                        <div className="py-10 text-lg">
                            <li className="py-2">
                                <strong>Team Player:</strong> I belive in teamwork and will be an asset to your organization
                            </li>
                            <li className="py-2">
                                <strong>Best Practices:</strong> I take every detail seriously, and ensure the quality of my worke exceeds your expectations
                            </li>
                            <li className="py-2">
                                <strong>Error-free Code:</strong> I test my code rigorously with all possible scenarios before making the project live
                            </li>
                            <li className="py-2">
                                <strong>Experience:</strong> I bring significant amount of experience from various industries at various levels
                            </li>
                            <li className="py-2">
                                <strong>Commitment:</strong> I do not make any commitments if I am not 100% sure about the outcome. I value your time!
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}