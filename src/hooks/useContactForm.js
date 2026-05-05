import { useState } from 'react'

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  budget: '',
  timeline: '',
}

const INITIAL_ERRORS = {
  name: '',
  email: '',
  message: '',
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function useContactForm({ onSubmit }) {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function validate() {
    const newErrors = { name: '', email: '', message: '' }
    let valid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
      valid = false
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Enter a valid email'
      valid = false
    }
    if (formData.message.trim().length < 20) {
      newErrors.message = 'Tell us more about your project'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    // Clear submit-level error when user edits anything
    if (submitError) setSubmitError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitError('')

    try {
      await onSubmit(formData)
      setSuccess(true)
      setFormData(INITIAL_FORM)
    } catch (err) {
      console.error('Submission error:', err)
      setSubmitError(
        err?.message?.startsWith('VITE_FORMSPREE_ENDPOINT')
          ? 'Form endpoint not configured. Add VITE_FORMSPREE_ENDPOINT to .env.local.'
          : 'Something went wrong. Try emailing us directly at info@saltandlighttechnologies.com'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  function reset() {
    setSuccess(false)
    setSubmitError('')
    setFormData(INITIAL_FORM)
    setErrors(INITIAL_ERRORS)
  }

  return {
    formData,
    errors,
    submitError,
    isSubmitting,
    success,
    handleChange,
    handleSubmit,
    reset,
  }
}
