geneApp.service("GeneService", GeneService);
GeneService.$inject = ["$http"];

function GeneService($http) {
    this.data = [{ "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "F583C", "name": "F583C", "refResidues": "F", "proteinStart": 583, "proteinEnd": 583, "variantResidues": "C", "uniqueId": "BRAF&F583C&F583C&MUTATION&missense_variant&583&583&F&C" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "NA", "isGenerallyTruncating": false, "description": "NA" }, "alteration": "PJA2-BRAF fusion", "name": "PJA2-BRAF fusion", "refResidues": null, "proteinStart": -1, "proteinEnd": 100000, "variantResidues": null, "uniqueId": "BRAF&PJA2-BRAF fusion&PJA2-BRAF fusion&MUTATION&NA&-1&100000&&" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "G596C", "name": "G596C", "refResidues": "G", "proteinStart": 596, "proteinEnd": 596, "variantResidues": "C", "uniqueId": "BRAF&G596C&G596C&MUTATION&missense_variant&596&596&G&C" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "T233P", "name": "T233P", "refResidues": "T", "proteinStart": 233, "proteinEnd": 233, "variantResidues": "P", "uniqueId": "BRAF&T233P&T233P&MUTATION&missense_variant&233&233&T&P" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "P345L", "name": "P345L", "refResidues": "P", "proteinStart": 345, "proteinEnd": 345, "variantResidues": "L", "uniqueId": "BRAF&P345L&P345L&MUTATION&missense_variant&345&345&P&L" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "Q257H", "name": "Q257H", "refResidues": "Q", "proteinStart": 257, "proteinEnd": 257, "variantResidues": "H", "uniqueId": "BRAF&Q257H&Q257H&MUTATION&missense_variant&257&257&Q&H" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "V459L", "name": "V459L", "refResidues": "V", "proteinStart": 459, "proteinEnd": 459, "variantResidues": "L", "uniqueId": "BRAF&V459L&V459L&MUTATION&missense_variant&459&459&V&L" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "G11S", "name": "G11S", "refResidues": "G", "proteinStart": 11, "proteinEnd": 11, "variantResidues": "S", "uniqueId": "BRAF&G11S&G11S&MUTATION&missense_variant&11&11&G&S" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "inframe_deletion", "isGenerallyTruncating": false, "description": "An inframe non synonymous variant that deletes bases from the coding sequence" }, "alteration": "P490_Q494del", "name": "P490_Q494del", "refResidues": null, "proteinStart": 490, "proteinEnd": 494, "variantResidues": null, "uniqueId": "BRAF&P490_Q494del&P490_Q494del&MUTATION&inframe_deletion&490&494&&" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "L485F", "name": "L485F", "refResidues": "L", "proteinStart": 485, "proteinEnd": 485, "variantResidues": "F", "uniqueId": "BRAF&L485F&L485F&MUTATION&missense_variant&485&485&L&F" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "G466A", "name": "G466A", "refResidues": "G", "proteinStart": 466, "proteinEnd": 466, "variantResidues": "A", "uniqueId": "BRAF&G466A&G466A&MUTATION&missense_variant&466&466&G&A" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "G469S", "name": "G469S", "refResidues": "G", "proteinStart": 469, "proteinEnd": 469, "variantResidues": "S", "uniqueId": "BRAF&G469S&G469S&MUTATION&missense_variant&469&469&G&S" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "inframe_deletion", "isGenerallyTruncating": false, "description": "An inframe non synonymous variant that deletes bases from the coding sequence" }, "alteration": "T488_P492del", "name": "T488_P492del", "refResidues": null, "proteinStart": 488, "proteinEnd": 492, "variantResidues": null, "uniqueId": "BRAF&T488_P492del&T488_P492del&MUTATION&inframe_deletion&488&492&&" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "R462E", "name": "R462E", "refResidues": "R", "proteinStart": 462, "proteinEnd": 462, "variantResidues": "E", "uniqueId": "BRAF&R462E&R462E&MUTATION&missense_variant&462&462&R&E" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "I572F", "name": "I572F", "refResidues": "I", "proteinStart": 572, "proteinEnd": 572, "variantResidues": "F", "uniqueId": "BRAF&I572F&I572F&MUTATION&missense_variant&572&572&I&F" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "K483M", "name": "K483M", "refResidues": "K", "proteinStart": 483, "proteinEnd": 483, "variantResidues": "M", "uniqueId": "BRAF&K483M&K483M&MUTATION&missense_variant&483&483&K&M" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "L597Q", "name": "L597Q", "refResidues": "L", "proteinStart": 597, "proteinEnd": 597, "variantResidues": "Q", "uniqueId": "BRAF&L597Q&L597Q&MUTATION&missense_variant&597&597&L&Q" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "R682W", "name": "R682W", "refResidues": "R", "proteinStart": 682, "proteinEnd": 682, "variantResidues": "W", "uniqueId": "BRAF&R682W&R682W&MUTATION&missense_variant&682&682&R&W" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "E13K", "name": "E13K", "refResidues": "E", "proteinStart": 13, "proteinEnd": 13, "variantResidues": "K", "uniqueId": "BRAF&E13K&E13K&MUTATION&missense_variant&13&13&E&K" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "R389C", "name": "R389C", "refResidues": "R", "proteinStart": 389, "proteinEnd": 389, "variantResidues": "C", "uniqueId": "BRAF&R389C&R389C&MUTATION&missense_variant&389&389&R&C" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "V480L", "name": "V480L", "refResidues": "V", "proteinStart": 480, "proteinEnd": 480, "variantResidues": "L", "uniqueId": "BRAF&V480L&V480L&MUTATION&missense_variant&480&480&V&L" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "P162S", "name": "P162S", "refResidues": "P", "proteinStart": 162, "proteinEnd": 162, "variantResidues": "S", "uniqueId": "BRAF&P162S&P162S&MUTATION&missense_variant&162&162&P&S" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "H574L", "name": "H574L", "refResidues": "H", "proteinStart": 574, "proteinEnd": 574, "variantResidues": "L", "uniqueId": "BRAF&H574L&H574L&MUTATION&missense_variant&574&574&H&L" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "Q628H", "name": "Q628H", "refResidues": "Q", "proteinStart": 628, "proteinEnd": 628, "variantResidues": "H", "uniqueId": "BRAF&Q628H&Q628H&MUTATION&missense_variant&628&628&Q&H" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "S116P", "name": "S116P", "refResidues": "S", "proteinStart": 116, "proteinEnd": 116, "variantResidues": "P", "uniqueId": "BRAF&S116P&S116P&MUTATION&missense_variant&116&116&S&P" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "NA", "isGenerallyTruncating": false, "description": "NA" }, "alteration": "BRAF-METTL2B fusion", "name": "BRAF-METTL2B fusion", "refResidues": null, "proteinStart": -1, "proteinEnd": 100000, "variantResidues": null, "uniqueId": "BRAF&BRAF-METTL2B fusion&BRAF-METTL2B fusion&MUTATION&NA&-1&100000&&" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "P343L", "name": "P343L", "refResidues": "P", "proteinStart": 343, "proteinEnd": 343, "variantResidues": "L", "uniqueId": "BRAF&P343L&P343L&MUTATION&missense_variant&343&343&P&L" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "L485Y", "name": "L485Y", "refResidues": "L", "proteinStart": 485, "proteinEnd": 485, "variantResidues": "Y", "uniqueId": "BRAF&L485Y&L485Y&MUTATION&missense_variant&485&485&L&Y" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "D594Y", "name": "D594Y", "refResidues": "D", "proteinStart": 594, "proteinEnd": 594, "variantResidues": "Y", "uniqueId": "BRAF&D594Y&D594Y&MUTATION&missense_variant&594&594&D&Y" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "A27T", "name": "A27T", "refResidues": "A", "proteinStart": 27, "proteinEnd": 27, "variantResidues": "T", "uniqueId": "BRAF&A27T&A27T&MUTATION&missense_variant&27&27&A&T" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "I457V", "name": "I457V", "refResidues": "I", "proteinStart": 457, "proteinEnd": 457, "variantResidues": "V", "uniqueId": "BRAF&I457V&I457V&MUTATION&missense_variant&457&457&I&V" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "inframe_deletion", "isGenerallyTruncating": false, "description": "An inframe non synonymous variant that deletes bases from the coding sequence" }, "alteration": "L485_P490delinsY", "name": "L485_P490delinsY", "refResidues": null, "proteinStart": 485, "proteinEnd": 490, "variantResidues": null, "uniqueId": "BRAF&L485_P490delinsY&L485_P490delinsY&MUTATION&inframe_deletion&485&490&&" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "NA", "isGenerallyTruncating": false, "description": "NA" }, "alteration": "BRAF-SCRIB fusion", "name": "BRAF-SCRIB fusion", "refResidues": null, "proteinStart": -1, "proteinEnd": 100000, "variantResidues": null, "uniqueId": "BRAF&BRAF-SCRIB fusion&BRAF-SCRIB fusion&MUTATION&NA&-1&100000&&" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "K164E", "name": "K164E", "refResidues": "K", "proteinStart": 164, "proteinEnd": 164, "variantResidues": "E", "uniqueId": "BRAF&K164E&K164E&MUTATION&missense_variant&164&164&K&E" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "Y472S", "name": "Y472S", "refResidues": "Y", "proteinStart": 472, "proteinEnd": 472, "variantResidues": "S", "uniqueId": "BRAF&Y472S&Y472S&MUTATION&missense_variant&472&472&Y&S" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "NA", "isGenerallyTruncating": false, "description": "NA" }, "alteration": "TRIM24-BRAF Fusion", "name": "TRIM24-BRAF Fusion", "refResidues": null, "proteinStart": -1, "proteinEnd": 100000, "variantResidues": null, "uniqueId": "BRAF&TRIM24-BRAF Fusion&TRIM24-BRAF Fusion&MUTATION&NA&-1&100000&&" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "K601Q", "name": "K601Q", "refResidues": "K", "proteinStart": 601, "proteinEnd": 601, "variantResidues": "Q", "uniqueId": "BRAF&K601Q&K601Q&MUTATION&missense_variant&601&601&K&Q" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "L597R", "name": "L597R", "refResidues": "L", "proteinStart": 597, "proteinEnd": 597, "variantResidues": "R", "uniqueId": "BRAF&L597R&L597R&MUTATION&missense_variant&597&597&L&R" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "P422A", "name": "P422A", "refResidues": "P", "proteinStart": 422, "proteinEnd": 422, "variantResidues": "A", "uniqueId": "BRAF&P422A&P422A&MUTATION&missense_variant&422&422&P&A" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "I572S", "name": "I572S", "refResidues": "I", "proteinStart": 572, "proteinEnd": 572, "variantResidues": "S", "uniqueId": "BRAF&I572S&I572S&MUTATION&missense_variant&572&572&I&S" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "S363F", "name": "S363F", "refResidues": "S", "proteinStart": 363, "proteinEnd": 363, "variantResidues": "F", "uniqueId": "BRAF&S363F&S363F&MUTATION&missense_variant&363&363&S&F" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "V600D", "name": "V600D", "refResidues": "V", "proteinStart": 600, "proteinEnd": 600, "variantResidues": "D", "uniqueId": "BRAF&V600D&V600D&MUTATION&missense_variant&600&600&V&D" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "G469A", "name": "G469A", "refResidues": "G", "proteinStart": 469, "proteinEnd": 469, "variantResidues": "A", "uniqueId": "BRAF&G469A&G469A&MUTATION&missense_variant&469&469&G&A" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "I554T", "name": "I554T", "refResidues": "I", "proteinStart": 554, "proteinEnd": 554, "variantResidues": "T", "uniqueId": "BRAF&I554T&I554T&MUTATION&missense_variant&554&554&I&T" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "S125F", "name": "S125F", "refResidues": "S", "proteinStart": 125, "proteinEnd": 125, "variantResidues": "F", "uniqueId": "BRAF&S125F&S125F&MUTATION&missense_variant&125&125&S&F" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "R362G", "name": "R362G", "refResidues": "R", "proteinStart": 362, "proteinEnd": 362, "variantResidues": "G", "uniqueId": "BRAF&R362G&R362G&MUTATION&missense_variant&362&362&R&G" }, { "gene": { "entrezGeneId": 673, "hugoSymbol": "BRAF", "name": "B-Raf proto-oncogene, serine/threonine kinase", "oncogene": true, "curatedIsoform": "ENST00000288602", "curatedRefSeq": "NM_004333.4", "geneAliases": ["NS7", "B-raf", "BRAF1", "RAFB1", "B-RAF1"], "tsg": false }, "consequence": { "term": "missense_variant", "isGenerallyTruncating": false, "description": "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved" }, "alteration": "L577I", "name": "L577I", "refResidues": "L", "proteinStart": 577, "proteinEnd": 577, "variantResidues": "I", "uniqueId": "BRAF&L577I&L577I&MUTATION&missense_variant&577&577&L&I" }];


    this.getVariants = function() {
        // Getting Access control error.
        // $http.get("http://oncokb.org/api/v1/genes/673/variants");
        return this.data;
    };
}