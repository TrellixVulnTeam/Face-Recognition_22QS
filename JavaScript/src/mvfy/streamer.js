import cv from 'opencv4nodejs'
import { REQUEST } from '../utils/constants'
export default ({ io, interval, size = [300, 300] }) => {
    const wCap = new cv.VideoCapture(0)
    wCap.set(cv.CAP_PROP_FRAME_WIDTH, size[0])
    wCap.set(cv.CAP_PROP_FRAME_HEIGHT, size[1])
    setInterval(() => {
        const frame = wCap.read();
        const _image = cv.imencode('.jpg', frame).toString('base64')
        io.emit(REQUEST.LOCAL_IMAGE_SEND, _image)
    }, interval);
}