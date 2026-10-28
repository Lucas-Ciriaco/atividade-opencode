import s from './Button.module.css'
export default function Button({ variant = 'primary', className = '', ...props }) {
  return <button className={`${s.btn} ${s[variant]} ${className}`} {...props} />
}
