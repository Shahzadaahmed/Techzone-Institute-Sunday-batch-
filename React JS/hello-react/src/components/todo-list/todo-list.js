// Note: TodoList component...!

import React, { useState } from 'react';
import "./style.css";

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCheckbox,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
    MDBSelect,
    MDBTooltip,
} from "mdb-react-ui-kit";

const TodoList = () => {

    // Note: Handeling states here...!
    const [todoInput, setTodoInput] = useState("");
    const [todoData, setTodoData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [previousData, setPreviousData] = useState(null);

    // Note: Add item handler...!
    const addItem = () => {
        const todoDataClone = todoData.slice(0);
        todoDataClone.push(todoInput);
        setTodoData(todoDataClone);
        setTodoInput("");
    };

    // Note: Delete item handler...!
    const deleteItemHandler = (value, key) => {
        // console.log(value, key);

        let todoDataClone = todoData.slice(0);
        todoDataClone.splice(key, 1);
        setTodoData(todoDataClone);
    };

    // Note: Edit item handler...!
    const editItem = (value, key) => {
        // console.log(value, key);

        setTodoInput(value);
        setIsEdit(true);

        let obj = {
            selectedItem: value,
            index: key
        };
        setPreviousData(obj);
    };

    // Note: Update item handler...!
    const updateItemHandler = () => {
        const todoDataClone = todoData.slice(0);
        todoDataClone.splice(previousData.index, 1, todoInput);
        setTodoData(todoDataClone);
        setTodoInput("");
        setIsEdit(false);
        setPreviousData(null);
    };

    return (
        <MDBContainer className="py-5">
            <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol>
                    <MDBCard
                        id="list1"
                        style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
                    >
                        <MDBCardBody className="py-4 px-4 px-md-5">
                            <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                                <MDBIcon fas icon="check-square" className="me-1" />
                                <u>My Todo-s</u>
                            </p>
                            <div className="pb-2">
                                <MDBCard>
                                    <MDBCardBody>
                                        <div className="d-flex flex-row align-items-center">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                id="exampleFormControlInput1"
                                                placeholder="Add new..."
                                            />
                                            <MDBTooltip
                                                tag="a"
                                                wrapperProps={{ href: "#!" }}
                                                title="Set due date"
                                            >
                                                <MDBIcon
                                                    fas
                                                    icon="calendar-alt"
                                                    size="lg"
                                                    className="me-3"
                                                />
                                            </MDBTooltip>
                                            <div>
                                                <MDBBtn>Add</MDBBtn>
                                            </div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                            <hr className="my-4" />

                            <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                                <p className="small mb-0 me-2 text-muted">Filter</p>
                                {/* <MDBSelect
                                    data={[
                                        { text: "All", value: 1 },
                                        { text: "Completed", value: 2 },
                                        { text: "Active", value: 3 },
                                        { text: "Has due date", value: 4 },
                                    ]}
                                />
                                <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                                <MDBSelect
                                    data={[
                                        { text: "Added date", value: 1 },
                                        { text: "Due date", value: 2 },
                                    ]}
                                /> */}
                                <MDBTooltip
                                    tag="a"
                                    wrapperProps={{ href: "#!" }}
                                    title="Ascending"
                                >
                                    <MDBIcon
                                        fas
                                        icon="sort-amount-down-alt"
                                        className="ms-2"
                                        style={{ color: "#23af89" }}
                                    />
                                </MDBTooltip>
                            </div>
                            <MDBListGroup horizontal className="rounded-0 bg-transparent">
                                <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                                    <MDBCheckbox
                                        name="flexCheck"
                                        value=""
                                        id="flexCheckChecked"
                                        defaultChecked
                                    />
                                </MDBListGroupItem>
                                <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                    {" "}
                                    <p className="lead fw-normal mb-0">
                                        Buy groceries for next week
                                    </p>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                                    <div className="d-flex flex-row justify-content-end mb-1">
                                        <MDBTooltip
                                            tag="a"
                                            wrapperProps={{ href: "#!" }}
                                            title="Edit todo"
                                        >
                                            <MDBIcon
                                                fas
                                                icon="pencil-alt"
                                                className="me-3"
                                                color="info"
                                            />
                                        </MDBTooltip>
                                        <MDBTooltip
                                            tag="a"
                                            wrapperProps={{ href: "#!" }}
                                            title="Delete todo"
                                        >
                                            <MDBIcon fas icon="trash-alt" color="danger" />
                                        </MDBTooltip>
                                    </div>
                                    <div className="text-end text-muted">
                                        <MDBTooltip
                                            tag="a"
                                            wrapperProps={{ href: "#!" }}
                                            title="Created date"
                                        >
                                            <p className="small text-muted mb-0">
                                                <MDBIcon fas icon="info-circle" className="me-2" />
                                                28th Jun 2020
                                            </p>
                                        </MDBTooltip>
                                    </div>
                                </MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="rounded-0 bg-transparent">
                                <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                                    <MDBCheckbox name="flexCheck" value="" id="flexCheck" />
                                </MDBListGroupItem>
                                <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                    {" "}
                                    <p className="lead fw-normal mb-0">Renew car insurance</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="px-3 py-1 d-flex align-items-center border-0 bg-transparent">
                                    <div className="py-2 px-3 me-2 border border-warning rounded-3 d-flex align-items-center bg-light">
                                        <p className="small mb-0">
                                            <MDBTooltip
                                                tag="a"
                                                wrapperProps={{ href: "#!" }}
                                                title="Due on date"
                                            >
                                                <MDBIcon
                                                    fas
                                                    icon="hourglass-half"
                                                    color="warning"
                                                    className="me-2"
                                                />
                                            </MDBTooltip>
                                            28th Jun 2020
                                        </p>
                                    </div>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                                    <div className="d-flex flex-row justify-content-end mb-1">
                                        <MDBTooltip
                                            tag="a"
                                            wrapperProps={{ href: "#!" }}
                                            title="Edit todo"
                                        >
                                            <MDBIcon
                                                fas
                                                icon="pencil-alt"
                                                className="me-3"
                                                color="info"
                                            />
                                        </MDBTooltip>
                                        <MDBTooltip
                                            tag="a"
                                            wrapperProps={{ href: "#!" }}
                                            title="Delete todo"
                                        >
                                            <MDBIcon fas icon="trash-alt" color="danger" />
                                        </MDBTooltip>
                                    </div>
                                    <div className="text-end text-muted">
                                        <MDBTooltip
                                            tag="a"
                                            wrapperProps={{ href: "#!" }}
                                            title="Created date"
                                        >
                                            <p className="small text-muted mb-0">
                                                <MDBIcon fas icon="info-circle" className="me-2" />
                                                28th Jun 2020
                                            </p>
                                        </MDBTooltip>
                                    </div>
                                </MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="rounded-0 bg-transparent">
                                <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                                    <MDBCheckbox name="flexCheck" value="" id="flexCheck" />
                                </MDBListGroupItem>
                                <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                    {" "}
                                    <p className="lead fw-normal mb-0 bg-light w-100 ms-n2 ps-2 py-1 rounded">
                                        Sign up for online course
                                    </p>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                                    <div className="d-flex flex-row justify-content-end mb-1">
                                        <MDBTooltip
                                            tag="a"
                                            wrapperProps={{ href: "#!" }}
                                            title="Delete todo"
                                        >
                                            <MDBIcon fas icon="trash-alt" color="danger" />
                                        </MDBTooltip>
                                    </div>
                                    <div className="text-end text-muted">
                                        <MDBTooltip
                                            tag="a"
                                            wrapperProps={{ href: "#!" }}
                                            title="Created date"
                                        >
                                            <p className="small text-muted mb-0">
                                                <MDBIcon fas icon="info-circle" className="me-2" />
                                                28th Jun 2020
                                            </p>
                                        </MDBTooltip>
                                    </div>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default TodoList;










/*
<>
            <h1> Todo List App using React JS! </h1>

            <div>
                <input
                    type='text'
                    placeholder='Write Something...'
                    value={todoInput}
                    onChange={(e) => { setTodoInput(e.target.value) }}
                />

                {
                    isEdit ?
                        <button onClick={updateItemHandler}> Update Item </button> :
                        <>
                            <button onClick={addItem}> Add Item </button>
                            <button onClick={() => setTodoData([])}> Delete All </button>
                        </>
                }
            </div>

            <ul>
                {
                    (todoData && todoData.length > 0)
                        ?
                        (
                            todoData.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item}
                                        <button onClick={() => deleteItemHandler(item, index)}> Delete Item </button>
                                        <button onClick={() => editItem(item, index)}> Edit Item </button>
                                    </li>
                                );
                            })
                        )
                        :
                        (<h1> No Data! </h1>)
                }
            </ul>
        </>
*/