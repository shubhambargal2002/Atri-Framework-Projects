from .atri import Atri
from fastapi import Request, Response
from atri_utils import *

def create_new_background(at: Atri, back_img):
    if at.Image1.custom.src != '/app-assets/profile_pic.png':
        inp_img = Image.open('assets/' + at.Image1.custom.src.split('/')[-1]).resize((600, 600))
        if type(back_img) == str:
            back = Image.open('assets/' + back_img.split('/')[-1]).resize((600, 600))
        if type(back_img) == bytes:
            back = Image.fromarray(parse_uploaded_file(back_img)).resize((600, 600))
        
        img_new = change_background(inp_img, back, return_as_np_array=True)
        at.Image1.custom.src = create_media_response(img_new, mime_type='images/jpeg')

def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    at.Flex23.styles.display = "none"
    at.TextBox2.styles.color = "#909090"
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.TextBox2.onClick:
        at.Flex14.styles.display = "none"
        at.Flex23.styles.display = "flex"
        at.TextBox2.styles.color = "#000000"
        at.TextBox3.styles.color = "#909090"

    if at.TextBox3.onClick:
        at.Flex14.styles.display = "flex"
        at.Flex23.styles.display = "none"
        at.TextBox2.styles.color = "#909090"
        at.TextBox3.styles.color = "#000000"

    if at.Image5.onClick:
        at.Image2.custom.src = at.Image5.custom.src
        at.Image1.custom.src = at.Image5.custom.src
        at.Image2.styles.paddingTop = "0px"
        at.Image1.styles.paddingTop = "0px"

    if at.Image6.onClick:
        at.Image2.custom.src = at.Image6.custom.src
        at.Image1.custom.src = at.Image6.custom.src
        at.Image2.styles.paddingTop = "0px"
        at.Image1.styles.paddingTop = "0px"

    if at.Image7.onClick:
        at.Image2.custom.src = at.Image7.custom.src
        at.Image1.custom.src = at.Image7.custom.src
        at.Image2.styles.paddingTop = "0px"
        at.Image1.styles.paddingTop = "0px"

    if at.Image8.onClick:
        at.Image2.custom.src = at.Image8.custom.src
        at.Image1.custom.src = at.Image8.custom.src
        at.Image2.styles.paddingTop = "0px"
        at.Image1.styles.paddingTop = "0px"

    if at.Image12.onClick:
        at.Image15.custom.src = at.Image12.custom.src
        # at.Image1.custom.src = at.Image12.custom.src
        # create_new_background(at, at.Image12.custom.src)
        at.Image15.styles.paddingTop = "0px"
        at.Image1.styles.paddingTop = "0px"

    if at.Image9.onClick:
        at.Image15.custom.src = at.Image9.custom.src
        # at.Image1.custom.src = at.Image9.custom.src
        at.Image15.styles.paddingTop = "0px"
        at.Image1.styles.paddingTop = "0px"

    if at.Image10.onClick:
        at.Image15.custom.src = at.Image10.custom.src
        # at.Image1.custom.src = at.Image10.custom.src
        at.Image15.styles.paddingTop = "0px"
        at.Image1.styles.paddingTop = "0px"

    if at.Image11.onClick:
        at.Image15.custom.src = at.Image11.custom.src
        # at.Image1.custom.src = at.Image11.custom.src
        at.Image15.styles.paddingTop = "0px"
        at.Image1.styles.paddingTop = "0px"

    if at.Upload1.onChange:
        if at.Upload1.io.files is not None:
            file = at.Upload1.io.files[0]
            files_bytes = file.file.read()
            at.Image1.custom.src = create_media_response(files_bytes, mime_type=file.content_type)
            at.Image2.custom.src = at.Image1.custom.src
            at.Image2.styles.paddingTop = "0px"
            at.Image1.styles.paddingTop = "0px"

    if at.Upload2.onChange:
        if at.Upload2.io.files is not None:
            file = at.Upload2.io.files[0]
            files_bytes = file.file.read()
            # at.Image1.custom.src = create_media_response(files_bytes, mime_type=file.content_type)
            # at.Image15.custom.src = at.Image1.custom.src
            at.Image15.custom.src = create_media_response(files_bytes, mime_type=file.content_type)
            # create_new_background(at, at.Image15.custom.src)
            at.Image15.styles.paddingTop = "0px"
            at.Image1.styles.paddingTop = "0px"
    pass