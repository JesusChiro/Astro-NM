export interface Preload {
	as: string
	src: string
	type: string
	rel?: "preload" | "prefetch"
	crossorigin?: string
}