import React, { useRef } from 'react';
import "./camera.css"

export function Camera() {
    const videoRef = useRef(null);

    // Ask for camera access when component mounts
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        })
        .catch((error) => {
            console.error('Error accessing camera:', error);
        });


    return (
        <>
            <div className="RegisterFormComp_form_camera_con">
                <div className="RegisterFormComp_form_cam">
                <video ref={videoRef} autoPlay playsInline className='camera_vid' style={{height:"250px", borderRadius: '10px' }} />
                    {/* <AddAPhotoIcon sx={{ fontSize: "50px",color:"#756a6a" }} /> */}
                </div>
                <div className="RegisterFormComp_form_cam_btn">
                    <button className='reg_fr_btn' onClick={() => CameraOutlined()}>Take photo</button>
                </div>
            </div>
            {/* < div style={{ textAlign: 'center' }
            }>
                <br />
                <button className='camera_btn'>
                    Capture Image
                </button>
            </div > */}
        </>


    );
}

