import { toast, ToastContent } from 'react-toastify'
import { Loader } from '..'

type ToastifyProps = {
  title: ToastContent
}

export const toasts = {
  info: ({ title }: ToastifyProps) => toast.info(title),
  success: ({ title }: ToastifyProps) => toast.success(title),
  warn: ({ title }: ToastifyProps) => toast.warn(title),
  error: ({ title }: ToastifyProps) => toast.error(title),
  loader: ({ title }: ToastifyProps) =>
    toast(<Loader label={title as string} />),
}
