//оставляю на будущее

// const getEnvVar = (key: string): string => {
//     const value = process.env[key]

//     if (value === null || value === undefined || value === '') {
//         throw new Error(`Env variable ${key} is required`)
//     }

//     return value
// }

export const API_URL = 'https://jsonplaceholder.typicode.com'
// export const NODE_ENV = getEnvVar('NODE_ENV')
// export const isDevEnv = NODE_ENV === 'development' || NODE_ENV === ''
// export const isProdEnv = NODE_ENV === 'production'
