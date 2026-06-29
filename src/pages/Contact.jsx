import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function Contact() {
  const navigate = useNavigate()
  const { t } = useLang()
  const { site, contactTopics, ui } = t

  const [form, setForm] = useState({ name: '', email: '', company: '', topic: contactTopics[0], message: '' })
  const [errors, setErrors] = useState({})

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = ui.errName
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = ui.errEmail
    if (!form.message.trim()) next.message = ui.errMessage
    return next
  }

  function handleSubmit(e) {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    // TODO: connect to a real backend / email service here.
    navigate('/thank-you', { state: { name: form.name } })
  }

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red ${
      errors[field] ? 'border-red-400' : 'border-line'
    }`

  return (
    <section className="bg-mist py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        {/* Left: intro */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{ui.contactTitle}</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{ui.contactIntro}</p>
          <ul className="mt-8 space-y-3 text-sm text-ink-soft">
            <li>
              <span className="font-semibold text-ink">{ui.emailLabel}</span>
              <a href={`mailto:${site.email}`} className="text-red-dark hover:underline">{site.email}</a>
            </li>
            <li><span className="font-semibold text-ink">{ui.phoneLabel}</span>{site.phone}</li>
            <li><span className="font-semibold text-ink">{ui.addressLabel}</span>{site.address}</li>
          </ul>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">{ui.formName}</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className={fieldClass('name')}
                placeholder={ui.formNamePh}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">{ui.formEmail}</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className={fieldClass('email')}
                placeholder={ui.formEmailPh}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">{ui.formCompany}</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
                className={fieldClass('company')}
                placeholder={ui.formCompanyPh}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">{ui.formTopic}</label>
              <select
                value={form.topic}
                onChange={(e) => update('topic', e.target.value)}
                className={fieldClass('topic')}
              >
                {contactTopics.map((topic) => (
                  <option key={topic}>{topic}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">{ui.formMessage}</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                className={fieldClass('message')}
                placeholder={ui.formMessagePh}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-navy py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
            >
              {ui.formSubmit}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
