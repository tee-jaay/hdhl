import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const hasTitle = searchParams.has("title");
        const hasImageUrl = searchParams.has("imageUrl");
        const title = hasTitle
            ? searchParams.get("title")?.slice(0, 100)
            : "My website";

        const imageUrl = hasImageUrl
            ? searchParams.get("imageUrl") : "https://picsum.photos/600/400";

        return new ImageResponse(
            (
                <div tw="flex flex-col w-full h-full items-center justify-center bg-white" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div tw="bg-gray-50 flex w-full mt-auto">
                        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
                            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
                                <span>Ready to dive in?</span>
                                <span tw="text-indigo-600">{title}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            )
        );
    } catch (e: any) {
        return new Response("Failed to generate OG image", { status: 500 })
    }
}
