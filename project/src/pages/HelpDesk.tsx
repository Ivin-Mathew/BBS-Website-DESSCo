import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Check } from 'lucide-react';

const solutions = [
  'Property Management Solution',
  'VR and AR Solutions',
  'Smart LCD Solutions',
  'Video Conference',
];

function HelpDesk() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const onSubmit = async (data: any) => {
    // Generate unique ticket ID
    const newTicketId = 'TKT-' + Date.now().toString(36).toUpperCase();
    setTicketId(newTicketId);
    
    // In a real application, you would:
    // 1. Send data to backend
    // 2. Save to database
    // 3. Send confirmation email
    // 4. Export to Excel
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">Support Ticket Created!</h2>
          <p className="mt-2 text-gray-600">
            Your ticket ID is: <span className="font-bold">{ticketId}</span>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            We have sent a confirmation email with your ticket details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Submit a Support Request
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Country Code</label>
              <input
                type="text"
                {...register('countryCode', { required: true })}
                placeholder="+1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                {...register('phone', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Solution</label>
            <select
              {...register('solution', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select a solution</option>
              {solutions.map((solution) => (
                <option key={solution} value={solution}>
                  {solution}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              {...register('subject', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              {...register('description', { required: true })}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Files (Max 50MB)
            </label>
            <input
              type="file"
              {...register('files')}
              multiple
              accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Support Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HelpDesk;