/* eslint-disable @typescript-eslint/no-explicit-any */
import { toasts } from '@/utils/toastify'
import {
  ActionCreatorWithPayload,
  ThunkDispatch,
  UnknownAction,
} from '@reduxjs/toolkit'

type CreateTaskProps = {
  fork: any
  dispatch: ThunkDispatch<unknown, unknown, UnknownAction>
  action: ActionCreatorWithPayload<any, string>
  fetch: any
  toastProps: {
    textSuccess: string
    textLoad: string
    textError: string
  }
}

const createTask = async ({
  fork,
  dispatch,
  action,
  fetch,
  toastProps,
}: CreateTaskProps) => {
  toasts.loader({ title: toastProps.textLoad })
  const task = fork(async (api: { delay: (arg0: number) => any }) => {
    await api.delay(1000)

    return await fetch()
  })

  const response = await task.result

  if (response.status === 'ok') {
    toasts.success({ title: toastProps.textSuccess })
    dispatch(action(response.value))
  }

  if (response.status === 'rejected') {
    toasts.error({ title: toastProps.textError })
  }

  return response
}

export default createTask
