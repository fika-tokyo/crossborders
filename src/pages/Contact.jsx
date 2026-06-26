import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { site, contactTopics } from '../content.js'

const emptyForm = { name: '', email: '', company: '', topic: contactTopics[0], message: '' }

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = '请填写您的称呼'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = '请填写有效的邮箱'
    if (!form.message.trim()) next.message = '请简单描述您的需求'
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
    // For now we carry the submission to the thank-you page via router state.
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
          <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">联系咨询</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            填写下面的表单，我们会在一个工作日内与您取得联系。也欢迎直接通过邮件或电话联系我们。
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink-soft">
            <li>
              <span className="font-semibold text-ink">邮箱：</span>
              <a href={`mailto:${site.email}`} className="text-red-dark hover:underline">{site.email}</a>
            </li>
            <li><span className="font-semibold text-ink">电话：</span>{site.phone}</li>
            <li><span className="font-semibold text-ink">地址：</span>{site.address}</li>
          </ul>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">称呼 *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className={fieldClass('name')}
                placeholder="您的姓名"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">邮箱 *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className={fieldClass('email')}
                placeholder="you@company.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">公司</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
                className={fieldClass('company')}
                placeholder="公司名称（选填）"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">咨询主题</label>
              <select
                value={form.topic}
                onChange={(e) => update('topic', e.target.value)}
                className={fieldClass('topic')}
              >
                {contactTopics.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">需求描述 *</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                className={fieldClass('message')}
                placeholder="简单介绍您面临的挑战或目标…"
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-navy py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
            >
              提交咨询
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
