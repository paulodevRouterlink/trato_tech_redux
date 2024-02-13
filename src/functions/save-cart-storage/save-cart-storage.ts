/* eslint-disable @typescript-eslint/no-explicit-any */
type SaveCartStorageProps = {
  key: string
  data: any
}

export const saveCartStorage = ({ key, data }: SaveCartStorageProps) => {
  localStorage.setItem(key, JSON.stringify(data))
}
