// app/contact/page.jsx

export const metadata = {
  title: "Contact Me | Drew Clark's Blog",
  description: 'Get in touch with Drew Clark.',
};

export default function ContactPage() {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-brandGray-900 rounded-lg shadow-sm border border-brandGray-200 dark:border-brandGray-800">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold tracking-tight text-brandGray-900 dark:text-white mb-6">
                            Contact Me
                        </h1>
                        <p className="text-lg text-brandGray-600 dark:text-brandGray-300 mb-8">
                            Have a question or just want to say hi? Fill out the form below!
                        </p>
                        
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-brandGray-700 dark:text-brandGray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border border-brandGray-300 dark:border-brandGray-700 rounded-md bg-white dark:bg-brandGray-800 text-brandGray-900 dark:text-white focus:ring-2 focus:ring-brandGreen-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-brandGray-700 dark:text-brandGray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-brandGray-300 dark:border-brandGray-700 rounded-md bg-white dark:bg-brandGray-800 text-brandGray-900 dark:text-white focus:ring-2 focus:ring-brandGreen-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-brandGray-700 dark:text-brandGray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    className="w-full px-4 py-2 border border-brandGray-300 dark:border-brandGray-700 rounded-md bg-white dark:bg-brandGray-800 text-brandGray-900 dark:text-white focus:ring-2 focus:ring-brandGreen-500 focus:border-transparent"
                                    required
                                ></textarea>
                            </div>
                            
                            <div>
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-brandGreen-600 hover:bg-brandGreen-700 text-white font-medium rounded-md transition-colors duration-200"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
