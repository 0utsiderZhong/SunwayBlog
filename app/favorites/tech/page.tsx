/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bdVP7vwEU0i
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/vercel_ui/card"
import Link from "next/link"


export default function Component() {
    return (
        <div className="flex flex-col gap-10 px-4 py-6">
            <h1 className="text-4xl font-bold">My Favorite Tech Site</h1>
            <div className="grid w-full gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>TheByteBook</CardTitle>
                        <CardDescription>深入讲解内核网络、Kubernetes、ServiceMesh、容器等云原生相关技术.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link className="text-blue-500 underline" href="https://www.thebyte.com.cn/">
                            Visit TheByteBook
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Baeldung</CardTitle>
                        <CardDescription>专注于Java生态的Baeldung.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link className="text-blue-500 underline" href="https://www.baeldung.com/">
                            Visit Baeldung
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>捕蛇者说</CardTitle>
                        <CardDescription>Python周刊.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link className="text-blue-500 underline" href="https://pythonhunter.org/">
                            Visit PythonHunter
                        </Link>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                <h2 className="flex justify-center items-center text-2xl font-bold">Contact Me To Add New Tech Site</h2>
                <a href="mailto:shengweizhong910@gmail.com" aria-label="Email" className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="80px" height="80px" className="align-middle">
                        <path fill="#1e88e5" d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"/>
                        <path fill="#fff" d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

