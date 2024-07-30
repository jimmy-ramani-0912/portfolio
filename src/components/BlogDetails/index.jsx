import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { pdfjs } from "react-pdf";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 16px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

export const SCPdfs = styled.section`
  height: calc(100dvh - 80px);
  overflow: auto;
  padding: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media only screen and (max-width: 600px) {
    height: 450px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  white-space: pre-line;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Index = ({ openBlogModal, setOpenBlogModal }) => {
  const [numPages, setNumPages] = useState(null);

  const blog = openBlogModal?.blog;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const zoomPluginInstance = zoomPlugin({ enableShortcuts: true });
  const defaultLayoutPluginInstance = defaultLayoutPlugin(zoomPluginInstance);

  return (
    <Modal
      open={true}
      onClose={() => setOpenBlogModal({ state: false, blog: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenBlogModal({ state: false, blog: null })}
          />
          <Title>{blog?.title}</Title>

          {blog?.pdfUrl && (
            <SCPdfs>
              <Worker
                workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
              >
                <Viewer
                  fileUrl={blog?.pdfUrl}
                  plugins={[defaultLayoutPluginInstance]}
                  onLoadSuccess={onDocumentLoadSuccess}
                />
              </Worker>
            </SCPdfs>
          )}
          {blog?.photoUrl && <Image src={blog?.photoUrl} />}
          <Desc>{blog?.description}</Desc>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default Index;
