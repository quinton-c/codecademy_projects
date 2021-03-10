// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, dnaStrand) => {
  return {_specimenNum: num,
          _dna: dnaStrand,
          get specimenNum() {
            return this._specimenNum;
          },
          set specimenNum(input) {
            if (typeOf(input) == number) {
              this._specimenNum = input;
            } else return `Please provide a number`
          },
          get dna() {
            return this._dna;
          },
          set dna(strand) {
            if (strand.isArray() && strand.length === 15) {
              this._dna = strand;
            } else return `You need a strand of 15 genes`
          },
          mutate() {
            let randBase;
            let randNum = Math.floor(Math.random() * 15);
            let randGene = this._dna[randNum];
            do {
                randBase = returnRandBase();
            } while (randGene === randBase);
              this._dna[randNum] = randBase;
          },
          compareDNA (obj) {
            let sameCount = 0;
            for (let i = 0; i < this.dna.length; i++) {
              if (this.dna[i] === obj.dna[i]) {
                sameCount++;
              }
            };
            let samePCT = ((sameCount / this.dna.length) * 100).toFixed(3);
            return `The two DNA strands are ${samePCT}% alike`;
          },
          willLikelySurvive () {
            let geneCount = 0;
            this.dna.forEach(gene => {
              if (gene === 'C' || gene === 'G') {
                geneCount++
              }
            });
            return (geneCount >= (this.dna.length * 0.6));
          }
        }
}

let joe = pAequorFactory(69, mockUpStrand());
console.log(joe.dna);
joe.mutate();
console.log(joe.dna);

let sam = pAequorFactory(96, mockUpStrand());
console.log(sam.dna);
console.log(joe.compareDNA(sam));
console.log(sam.willLikelySurvive());

let batchArray = [];

for (let i = 0; batchArray.length < 30; i++) {
  let newOrg = pAequorFactory(i, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    batchArray.push(newOrg);
  };
}

console.log(batchArray);
