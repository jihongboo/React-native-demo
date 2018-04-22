import startImage from "./startImage"

describe('test startImage reducer', () => {
    it('test result', () => {
        const result = {
            img: '',
            text: '',
        }
        expect(startImage()).toMatchObject(result)
    })
})