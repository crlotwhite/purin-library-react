import {Button, Card, Collapse, Table} from "react-bootstrap";
import {useState} from "react";

const searchItemStyle = {
    display: 'flex',
    flex: 1
}

function SearchItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card border="light" style={{width: '100%'}}>
                <div style={searchItemStyle}>
                    <Card.Body>
                        <div className="text-start">
                            <Card.Title>{props.title} ({props.titleOrigin})</Card.Title>
                            <Card.Text>
                                <p className="m-0">가수/작곡자: {props.artist}</p>
                                <p className="m-0 mb-4">분류: {props.category}</p>
                                <Collapse in={open}>
                                    <div id="detail">
                                        <Table striped bordered hover>
                                            <thead>
                                            <tr>
                                                <th>기기</th>
                                                <th>노래방 번호</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>TJ</td>
                                                <td>{props.tj}</td>
                                            </tr>
                                            <tr>
                                                <td>KY</td>
                                                <td>{props.ky}</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Collapse>
                                <br/>
                                <Button
                                    variant="primary"
                                    size="md"
                                    onClick={()=>{setOpen(!open)}}
                                    aria-controls="detail"
                                    aria-expanded={open}
                                >자세히 보기</Button>
                            </Card.Text>
                        </div>
                    </Card.Body>
                </div>

            </Card>
        </>
    )
}

export default SearchItem;