import React from 'react'
import {connect} from 'react-redux'
import Moment from 'moment'
import { getDocuments } from './redux/actionCreator';
import FileBrowser, { FileRenderers, FolderRenderers, Groupers, Icons } from 'react-keyed-file-browser';
import 'react-keyed-file-browser/dist/react-keyed-file-browser.css';
const mapStateToProps = state =>{
  return{
    documents: state.documentList
  }
}
const mapDispatchToProps = dispatch =>({
  getdocuments: () =>dispatch(getDocuments())
});
class FileBrowserHelper extends React.Component{
  constructor(props){
    super(props);
    this.state= {
     
      
    }
  }
  componentDidMount(){
    this.props.getdocuments();  }
  
    render(){
      var files;
      if(this.props.documents.documents){
       files = this.props.documents.documents.map(function(item){
         
        return {
          'key':item['Key']
        }
      })
    }
     
        return(
            <>
            <FileBrowser
    files={files}
    icons={{
      File: <i className="file" aria-hidden="true" />,
      Image: <i className="file-image" aria-hidden="true" />,
      PDF: <i className="file-pdf" aria-hidden="true" />,
      Rename: <i className="i-cursor" aria-hidden="true" />,
      Folder: <i className="folder" aria-hidden="true" />,
      FolderOpen: <i className="folder-open" aria-hidden="true" />,
      Delete: <i className="trash" aria-hidden="true" />,
      Loading: <i className="circle-notch spin" aria-hidden="true" />,
    }}
   
  />
            </>
        )
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(FileBrowserHelper)