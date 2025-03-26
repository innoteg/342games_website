const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://runestone-api.342games.com/api/'; // 从环境变量中获取 baseUrl
console.log('baseUrl', baseUrl)
export async function fetchData(endpoint: string, data: any, options: RequestInit = {}): Promise<any> {
    const defaultOptions: any = {
        method: "POST",
        headers: {}
    }
    if (options.method === 'POST') {
        defaultOptions.body = JSON.stringify(data);
        Object.assign(defaultOptions.headers, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
    }
    // if (options.method === 'GET') {
    //     const params = new URLSearchParams(data).toString();
    //     endpoint = `${endpoint}?${params}`;
    // }
    const response = await fetch(`${baseUrl}${endpoint}`, { ...defaultOptions, ...options });
    if (!response.ok) {
        return Promise.resolve({ code: 500, error: `HTTP error! Status: ${response.status}` }); // 返回一个 Promise
    }
    return response.json();
}
