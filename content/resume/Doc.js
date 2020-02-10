
import { PDFDownloadLink, Document, Page } from "react-pdf";

const Doc = () => (
    <Document   file="resume.pdf">
      <Page pageNumber={2}>
        // My document data
      </Page>
    </Document>
  )

export default Doc;