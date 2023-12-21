import { Loader } from '@/components/Spinner'
import { toast, ToastContent } from 'react-toastify'

type ToastifyProps = {
  title: ToastContent
}

export const toasts = {
  success: ({ title }: ToastifyProps) => toast.success(title),
  warn: ({ title }: ToastifyProps) => toast.warn(title),
  error: ({ title }: ToastifyProps) => toast.error(title),
  loader: ({ title }: ToastifyProps) =>
    toast(<Loader label={title as string} />),
}
