/* eslint-disable */
declare module '@distube/youtube-dl' {
    import { ExecaChildProcess, Options } from 'execa';

    type YtFormat = {
        asr: number,
        filesize: number,
        format_id: string,
        format_note: string,
        fps: number,
        height: number,
        quality: number,
        tbr: number,
        url: string,
        width: number,
        ext: string,
        vcodec: string,
        acodec: string,
        abr: number,
        downloader_options: unknown,
        container: string,
        format: string,
        protocol: string,
        http_headers: unknown
    }

    type YtThumbnail = {
        height: number,
        url: string,
        width: number,
        resolution: string,
        id: string,
    }

    type YtResponse = {
        id: string,
        title: string,
        formats: YtFormat[],
        thumbnails: YtThumbnail[],
        description: string,
        upload_date: string,
        uploader: string,
        uploader_id: string,
        uploader_url: string,
        channel_id: string,
        channel_url: string,
        duration: number,
        view_count: number,
        average_rating: number,
        age_limit: number,
        webpage_url: string,
        categories: string[],
        tags: string[],
        is_live: boolean,
        like_count: number,
        dislike_count: number,
        channel: string,
        track: string,
        artist: string,
        creator: string,
        alt_title: string,
        extractor: string,
        webpage_url_basename: string,
        extractor_key: string,
        playlist: string,
        playlist_index: number,
        thumbnail: string,
        display_id: string,
        requested_subtitles: unknown,
        asr: number,
        filesize: number,
        format_id: string,
        format_note: string,
        fps: number,
        height: number,
        quality: number,
        tbr: number,
        url: string,
        width: number,
        ext: string,
        vcodec: string,
        acodec: string,
        abr: number,
        downloader_options: { http_chunk_size: number },
        container: string,
        format: string,
        protocol: string,
        http_headers: unknown,
        fulltitle: string,
        _filename: string
    }

    export default function(url: string, flags?: unknown, options?: Options<string>): Promise<YtResponse>;
    export function raw(url: string, flags?: unknown, options?: Options<string>): ExecaChildProcess;
    export function download(url?: string): Promise<string>;
}
