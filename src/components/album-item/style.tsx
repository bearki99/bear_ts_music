import styled from "styled-components";

export const AlbumItemWrapper = styled.div`
    width: 118px;
    >.top {
        position: relative;
        img {
            width: 100px;
            height: 100px;
        }
        .cover {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 118px;
            height: 100px;
            background-position: 0 -570px;
        }
    }
    >.bottom {
        .song-name {
            padding-top: 2px;
        }
        .singer-name {
            color: #666;
        }
        .song-name, .singer-name {
            display: block;
            font-size: 12px;
        }
    }
`