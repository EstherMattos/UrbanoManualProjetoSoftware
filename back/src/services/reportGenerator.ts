import PDFDocument from 'pdfkit-table';
import { Response } from 'express';

interface Despesas {
  id: number;
  tipo: string;
  descricao: string;
  valor: number;
  residenciaId: number;
}

class ReportGenerator {
  residenciaId: number;
  constructor(residenciaId: number) {
    this.residenciaId = residenciaId;
  }

  convertItemsToString(data: any): string[][] {
    const items = data.map((c: any) =>
      Object.values(c).map((d: any) => d.toString())
    );
    return items;
  }

  getDocumentOutputName() {
    return `${Date.now()}-${this.residenciaId}`;
  }

  table() {
    return {
      title: `RELATORIO teste residencia ${this.residenciaId}`,
      subtitle: 'todo o periodo da residencia',
      headers: ['ID'],
      rows: [] as string[][],
    };
  }

  async generateReport(response: Response) {
    const doc = new PDFDocument({ margin: 30, size: 'A4' });

    const table = this.table();

    await doc.table(table, {
      columnsSize: [100, 100, 100, 100, 100],
    });

    doc.pipe(response);

    doc.end();
  }
}

class DespesasReportGenerator extends ReportGenerator {
  despesas: Despesas[];
  constructor(residenciaId: number, despesas: Despesas[]) {
    super(residenciaId);
    this.despesas = despesas;
  }

  table() {
    return {
      title: `RELATORIO DE DESPESAS DA RESIDENCIA ${this.residenciaId}`,
      subtitle: 'todo o periodo da residencia',
      headers: ['ID', 'TIPO', 'DESCRICAO', 'VALOR', 'RESIDENCIA'],
      rows: this.convertItemsToString(this.despesas),
    };
  }
}

export default DespesasReportGenerator;
