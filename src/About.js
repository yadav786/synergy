import React from 'react'
import { Table, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { getData } from './actions/addArticleAction'

class About extends React.Component{
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      modal: true
    }
    const { ...dataProps } = this.props
    dataProps.getData()
    // console.log(this);
  }

       toggle = () => {
         // const {...modal} = this.state;
         this.setState((prevState) => {
           const modal = prevState.modal
           return { modal: !modal }
         })
       }

       render(){

         const { modal } = this.state
         const { ...dynamicProps } = this.props
         return (
           <>
             <p>About</p>

					   {/* <Modal isOpen={modal}>
                         <ModalHeader>Card Selection</ModalHeader>
                          <ModalBody>You have Selected 4 Cards</ModalBody>
                         <ModalFooter>
                           <Button color="secondary" onClick={this.toggle}>Close</Button>
                         </ModalFooter>
                       </Modal>
					   */}

             <Table dark striped bordered hover responsive>

               <thead>
                 <tr>
                   <th>Sr. No.</th>
                   <th>Username</th>
                   <th>isAuthenticated</th>
                   <th>Action</th>
                 </tr>
               </thead>
               <tbody>
                 {dynamicProps.remoteArticles.map((value) => {
                   return (
                     <tr key={value.id}>
                       <td>{value.id}</td>
                       <td>{value.title}</td>
                       <td>{value.body}</td>
                       <td>
                         <Button color='primary'>Edit</Button>
                         <Button color='danger'>Delete</Button>
                       </td>
                     </tr>)
                 }) }
               </tbody>
             </Table>
           </>
         )
       }

}

const mapDispatchToProps = (state) =>{
  return state
}

const mapStateToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getData())
    }
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(About)
