export const getDatabaseUrl = (
  baseUrl: string | undefined,
  username: string | undefined,
  password: string | undefined,
	database: string | undefined
): string => {
  if (baseUrl && username && password && database) {
    baseUrl = baseUrl.replace('<username>', username)
    baseUrl = baseUrl.replace('<password>', password)
		baseUrl = baseUrl.replace('<database>', database)
    return baseUrl
  }
  return ''
}
