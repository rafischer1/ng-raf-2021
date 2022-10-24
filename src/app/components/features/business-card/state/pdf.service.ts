import { Injectable } from "@angular/core";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ToastsService } from "../../../../shared/toasts-container/state/toasts.service";

@Injectable({
  providedIn: "root",
})
export class PdfService {
  constructor(private toast: ToastsService) {}

  private static toPdf(html: HTMLCanvasElement) {
    const imgData = html.toDataURL("image/jpg");
    const setDimensions: {
      width: number;
      height: number;
      x: number;
      y: number;
    } = {
      width: 217,
      height: 130,
      x: 0,
      y: 0,
    };
    // * data URI .small() method not compatible with all browser
    imgData.small();
    const doc = new jsPDF.jsPDF("l", "mm", "a4");
    doc.addImage(
      imgData,
      "JPG",
      setDimensions.x,
      setDimensions.y,
      setDimensions.width,
      setDimensions.height
    );
    doc.save("Business Card");
  }

  pdfDownload(html: HTMLElement) {
    html2canvas(html, {
      scale: 5,
      allowTaint: false,
    }).then((canvas) => {
      PdfService.toPdf(canvas);
      this.toast.showToast("alert", "Error: Image not rendered");
    });
  }
}
