import { MDBFooter } from 'mdb-react-ui-kit';

export function FooterHome() {
    return(
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div style={{textStyle:'bold', color: 'black'}}>UpGrad Frontend Hackathon</div>
      </div>
    </MDBFooter>
    );
}