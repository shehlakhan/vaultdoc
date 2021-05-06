import React, {Component} from 'react';
import './App.css';
import { Container,Row, Col} from 'react-bootstrap';
import FileBrowserHelper from './FileBrowserHelper'
class App extends Component {
  constructor(props){
    super(props);
    }
   render(){
    
  return (
    <Container>
      <Row>
        <Col sm md={{span:'8',offset:'2'}} lg={{span:'8',offset:'2'}} className='cont'>
          <form id="myForm" onReset={this.handleReset} method="POST" action="http://localhost:3000/upload" enctype="multipart/form-data" >
                          
                        
                            <div className="mb-3 bulkUpload">
                              <label htmlFor="upload" className="form-label">Select File to Upload to AWS</label>
                              <input type="file"
                               className="form-control" 
                               id="uploadfile" 
                               name="upload" 
                               accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
                               placeholder="Please select a File"
                               />
                            </div>
                                       
                     
                        
                        <button type="submit" className="btn btn-primary mr-3 mb-3" >Upload file to AWS -S3</button>
                        

          </form>
          <form id="downloadform" onReset={this.handleReset} method="GET" action="http://localhost:3000/download"  >
          <button type="submit" className="btn btn-primary mb-3">Download file from s3 -AWS</button>
</form>

        </Col>
      </Row>
      <FileBrowserHelper />
    </Container>
  );
  }
}

export default App;
