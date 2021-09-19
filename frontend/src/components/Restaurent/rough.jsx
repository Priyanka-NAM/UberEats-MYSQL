// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import {
//   Card,
//   Container,
//   Col,
//   Form,
//   Row,
//   Button,
//   ButtonGroup,
// } from "react-bootstrap";

// class OwnerHome extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <Row>
//           <Col xs={6} md={4}>
//             <center>
//               <br />
//               <br />
//               {/* <Card style={{ width: '18rem' }}>
//                         <Card.Img variant="top" src=imageSrc />
//                     </Card> */}
//               <form>
//                 <br />
//                 <br />
//                 <br />
//                 <div className='custom-file' style={{ width: "80%" }}>
//                   <input
//                     type='file'
//                     className='custom-file-input'
//                     name='image'
//                     accept='image/*'
//                     required
//                   />
//                   {/* <label className="custom-file-label" for="image" style={{ "text-align": "left" }}>fileText</label> */}
//                 </div>
//                 <br />
//                 <br />
//                 <Button type='submit' variant='primary'>
//                   Upload
//                 </Button>
//               </form>
//             </center>
//           </Col>
//           <Col>
//             <br />
//             <br />
//             <h3>Edit Menu Item</h3>
//             <br />
//             <Form>
//               <Form.Group controlId='item_name'>
//                 <Form.Label column sm='3'>
//                   Item Name:
//                 </Form.Label>
//                 <Col sm='4'>
//                   <Form.Control
//                     style={{ width: "15rem" }}
//                     type='text'
//                     name='item_name'
//                     placeholder='Enter Item Name..'
//                     pattern='^[A-Za-z0-9 ]+$'
//                     required
//                   />
//                 </Col>
//               </Form.Group>
//               <Form.Group controlId='item_description'>
//                 <Form.Label column sm='3'>
//                   Item Description:
//                 </Form.Label>
//                 <Col sm='4'>
//                   <Form.Control
//                     style={{ width: "15rem" }}
//                     type='text'
//                     name='item_description'
//                     placeholder='Enter Item Description..'
//                     pattern='^[A-Za-z0-9 ,.-]+$'
//                     required
//                   />
//                 </Col>
//               </Form.Group>
//               <Form.Group controlId='item_price'>
//                 <Form.Label column sm='3'>
//                   Price:{" "}
//                 </Form.Label>
//                 <Col sm='4'>
//                   <Form.Control
//                     style={{ width: "15rem" }}
//                     type='text'
//                     name='item_price'
//                     placeholder='Enter Price..'
//                     pattern='^(\d*\.)?\d+$'
//                     required
//                   />
//                 </Col>
//               </Form.Group>
//               <Form.Group controlId='item_section'>
//                 <Form.Label column sm='3'>
//                   Section:
//                 </Form.Label>
//                 <Col sm='4'>
//                   <Form.Control
//                     as='select'
//                     style={{ width: "15rem" }}
//                     name='menu_section_name'>
//                     section_options
//                   </Form.Control>
//                 </Col>
//               </Form.Group>
//               <Button type='sumbit'>Update Item</Button>&nbsp;
//               <Button variant='warning' href='/menu/view'>
//                 Cancel
//               </Button>
//             </Form>
//             message
//           </Col>
//         </Row>

//         <div>
//           <Container className='justify-content'>
//             <br />
//             <h3>Update Section</h3>
//             <br />
//             <Form>
//               <Form.Group controlId='menu_section_name'>
//                 <Form.Label column sm='2'>
//                   Section Name:
//                 </Form.Label>
//                 <Col sm='4'>
//                   <Form.Control
//                     style={{ width: "15rem" }}
//                     type='text'
//                     name='menu_section_name'
//                     pattern='^[A-Za-z ]+$'
//                     required
//                   />
//                 </Col>
//                 <Col sm='6'>
//                   <Button variant='success' type='sumbit'>
//                     Update
//                   </Button>
//                   &nbsp;
//                   <Button variant='warning' href='/menu/section'>
//                     Cancel
//                   </Button>
//                 </Col>
//               </Form.Group>
//             </Form>
//             message
//           </Container>
//         </div>

//         <Card bg='white' style={{ width: "50rem", margin: "2%" }}>
//           <Row>
//             <Col align='left'>
//               <Card.Body>
//                 <Card.Title>vcsfdvvf</Card.Title>
//                 <Card.Text>
//                   <p>hxbfdcgnhf</p>
//                 </Card.Text>
//                 <Card.Text>Price: $ {10}</Card.Text>
//               </Card.Body>
//             </Col>
//             <Col align='right'>
//               <Link
//                 to={{ pathname: "/menu/item/update", state: { item_id: 1 } }}>
//                 <Button variant='link' name={1}>
//                   Edit
//                 </Button>
//                 &nbsp;
//               </Link>
//               <Button variant='link' onClick={1} name={1}>
//                 Delete
//               </Button>
//             </Col>
//           </Row>
//         </Card>

//         <Container className='justify-content'>
//           <br />
//           <h3>Add New Section</h3>
//           <br />
//           <Form onSubmit={this.onSubmit}>
//             <Form.Group as={Row} controlId='menu_section_name'>
//               <Form.Label column sm='2'>
//                 Section Name:
//               </Form.Label>
//               <Col sm='4'>
//                 <Form.Control
//                   style={{ width: "15rem" }}
//                   type='text'
//                   name='menu_section_name'
//                   placeholder='Enter Menu Section..'
//                   pattern='^[A-Za-z ]+$'
//                   required
//                 />
//               </Col>
//               <Col sm='6'>
//                 <Button type='sumbit'>Add Section</Button>
//               </Col>
//             </Form.Group>
//           </Form>
//           message
//           <br />
//           <br />
//           <table className='table' style={{ width: "50%" }}>
//             <thead>
//               <th>Sections</th>
//             </thead>
//             <tbody>menuSectionsList</tbody>
//           </table>
//         </Container>
//       </div>
//     );
//   }
// }

// export default OwnerHome;
