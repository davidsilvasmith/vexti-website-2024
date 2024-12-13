import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('https://formspree.io/f/xbjnkzrw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Contact Us
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-900 mr-3" />
                  <span className="text-gray-700">Contact our office to schedule a consultation</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-900 mr-3" />
                  <a href="mailto:dave@vexti.co" className="text-gray-700 hover:text-blue-900">dave@vexti.co</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-900 mr-3" />
                  <span className="text-gray-700">Available for in-person meetings by appointment</span>
                </div>
              </div>
            </div>
            <div>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <Check className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}