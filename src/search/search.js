import {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {Fab} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import SearchItem from "./search-item";
import vocaloidKor from "./vocaloidKor.json";


const fabStyle = {
    position: "fixed",
    bottom: "3%",
    right:"3%"
}

function query(category, keyword) {
    return vocaloidKor['songs'].filter((ele) => {
        if (category === 'title') {
            if (
                ele.songNameKorean.includes(keyword)
                || ele.songNameOrigin.includes(keyword)
            ) {
                return ele;
            }
        } else if (category === 'singer') {
            if (ele.artist.includes(keyword)) {
                return ele;
            }
        } else if (category === 'group') {
            if (ele.category.includes(keyword)) {
                return ele;
            }
        } else {
            if (
                ele.songNameKorean.includes(keyword)
                || ele.songNameOrigin.includes(keyword)
                || ele.artist.includes(keyword)
            ) {
                return ele;
            }
        }
    });
}

function Search() {
    const [category, setCategory] = useState("all");
    const [keyword, setKeyword] = useState("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        setResult(vocaloidKor["songs"])
    }, []);

    useEffect(() => {
        setResult(query(category, keyword));
    }, [keyword]);

    return (
        <>
            <div className="container-fluid">
                <div id="form-box" className="p-1 pb-3">
                    <Form className="d-flex align-items-center justify-content-center flex-sm-row">
                        <Form.Group className="mb-sm-0 mb-3">
                            <Form.Select name="category" className="" onChange={(e)=>{setCategory(e.target.value)}}>
                                <option value="all">분류 없음</option>
                                <option value="title">제목</option>
                                <option value="singer">가수/작곡자</option>
                                <option value="group">그룹</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mx-sm-3 flex-grow-1 mb-sm-0 mb-3">
                            <Form.Control
                                type="text"
                                className="flex-grow-1 w-100"
                                placeholder="검색하시려면 키워드를 적어주세요."
                                name="query"
                                onChange={(e) => {setKeyword(e.target.value)}}
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    {result.length === 0? <h1 className="display-3 p-3">검색 결과가 없습니다.</h1>:result.map((data, i) => {
                        return (
                            <SearchItem
                                key={i}
                                title={data.songNameKorean}
                                titleOrigin={data.songNameOrigin}
                                artist={data.artist}
                                category={data.category}
                                tj={data.tj}
                                ky={data.ky}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="" style={fabStyle}>
                <Fab color="primary" aria-label="top" onClick={() => {
                    window.scrollTo(0,0);
                }}>
                    <ArrowUpwardIcon />
                </Fab>
            </div>

        </>

    )
}

export default Search;