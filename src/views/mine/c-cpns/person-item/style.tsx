import styled from "styled-components";

export const PersonItemWrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    .left-content {
        float: left;
        .des {
            float: left;
            max-width: 150px;
            padding: 20px;
            border-radius: 20px 20px 20px 5px;
            background-color: rgb(56, 60, 75);
            color: #fff;
        }
        .des:hover {
            background-color: rgb(26, 27, 34);
        }
    }
    .right-content {
        float: right;
        .des {
            float: right;
            max-width: 150px;
            padding: 20px;
            border-radius: 20px 20px 5px 20px;
            background-color: rgb(29, 144, 245);
            color: #fff;
        }
        .des:hover {
            background-color: rgb(26, 129, 219);
        }
    }
    .main-detail {
        margin-top: 5px;
        display: flex;
        align-items: center;
        .icon {
            margin-right: 5px;
        }
        .name {
            margin-right: 5px;
        }
        .name, .time {
            color: white;
        }
    }
    .clearfix::after {
        display: block;
        height: 0;
        content: "";
        clear: both;
        overflow: hidden;
    }
`