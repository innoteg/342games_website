const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // 从环境变量中获取 baseUrl

export async function fetchData(endpoint: string, options: RequestInit = {}): Promise<any> {
    const response = await fetch(`${baseUrl}${endpoint}`, options);
    if (!response.ok) {
        return Promise.resolve({ code: 500, error: `HTTP error! Status: ${response.status}` }); // 返回一个 Promise
    }
    return response.json();
}
