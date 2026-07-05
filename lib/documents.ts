import { documentLibrary } from "@/data/document-library";
import type {
  DocumentFolder,
  DocumentLibraryItem,
  DocumentVisibility,
  MissionDocument
} from "@/lib/types";

export function getDocumentsForMission({
  missionId,
  mandateId,
  visibility
}: {
  missionId: string;
  mandateId?: string;
  visibility: DocumentVisibility;
}): DocumentLibraryItem[] {
  return documentLibrary.filter((document) => {
    const isForMission = document.missions.includes(missionId);
    const isVisible = document.visibility.includes(visibility);
    const isValidated = document.status === "Valide";
    const isForMandate =
      !document.mandateIds ||
      document.mandateIds.length === 0 ||
      (mandateId ? document.mandateIds.includes(mandateId) : false);

    return isForMission && isVisible && isValidated && isForMandate;
  });
}

export function groupDocumentsByCategory(
  documents: DocumentLibraryItem[]
): DocumentFolder[] {
  const folders = new Map<string, MissionDocument[]>();

  documents.forEach((document) => {
    const folderDocuments = folders.get(document.category) ?? [];
    folderDocuments.push(toMissionDocument(document));
    folders.set(document.category, folderDocuments);
  });

  return Array.from(folders.entries()).map(([name, folderDocuments]) => ({
    name,
    documents: folderDocuments
  }));
}

function toMissionDocument(document: DocumentLibraryItem): MissionDocument {
  return {
    name: document.name,
    owner: document.owner,
    type: document.type,
    date: document.date,
    classification: document.classification,
    href: document.href,
    description: document.description,
    version: document.version,
    status: document.status
  };
}
