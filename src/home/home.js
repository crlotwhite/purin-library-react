import {Button, Collapse} from "react-bootstrap";
import {useState} from "react";

function Home() {
    const [open, setOpen] = useState(false);

    return (
        <div className="m-5">
            <h1 className="display-1">푸린 도서관</h1>
            <p className="lead">오타쿠를 위한 노래방책</p>
            <hr className="my-4" />
            <div className="text-start">
                <p>노래 제목, 가수/작곡자, 애니메이션 제목으로 다양한 기기에서의 번호를 찾을 수 있습니다.</p>
                <Button
                    variant="primary"
                    className="mb-5"
                    size="lg"
                    onClick={()=>{setOpen(!open)}}
                    aria-controls="how-to-use"
                    aria-expanded={open}
                >자세한 사용법 알아보기</Button>
                <Collapse in={open}>
                    <div id="how-to-use">
                        <ol>
                            <li>Search 메뉴를 클릭한다.</li>
                            <li>원하는 곡 또는 작곡가를 검색한다.</li>
                            <li>"자세히 보기" 버튼을 눌러 번호를 확인한다.</li>
                        </ol>
                    </div>
                </Collapse>
            </div>

        </div>
    )
}

export default Home;