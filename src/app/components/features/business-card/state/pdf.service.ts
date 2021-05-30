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
    imgData.small();
    const doc = new jsPDF.jsPDF("l", "mm", "a4");
    doc.addImage(imgData, "JPG", 0, 0, 217, 130);
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
