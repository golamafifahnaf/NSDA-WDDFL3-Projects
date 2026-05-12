const treaties = document.getElementById('treaties');
const declarations = document.getElementById('declarations');
const correspondence = document.getElementById('correspondence');

if (treaties) {
    const typeTreaties = document.getElementById('typeTreaties');
    const dateTreaties = document.getElementById('dateTreaties');
    const relevanceTreaties = document.getElementById('relevanceTreaties');

    treaties.addEventListener('change', function () {
        const selectedValue = this.value;

        // Hide all sections
        typeTreaties.classList.add('d-none');
        dateTreaties.classList.add('d-none');
        relevanceTreaties.classList.add('d-none');

        // Show selected section
        if (selectedValue === 'type') typeTreaties.classList.remove('d-none');
        else if (selectedValue === 'date') dateTreaties.classList.remove('d-none');
        else if (selectedValue === 'relevance') relevanceTreaties.classList.remove('d-none');
    });
}

if (declarations) {
    const typeDeclarations = document.getElementById('typeDeclarations');
    const dateDeclarations = document.getElementById('dateDeclarations');
    const relevanceDeclarations = document.getElementById('relevanceDeclarations');

    declarations.addEventListener('change', function () {
        const selectedValue = this.value;

        // Hide all sections
        typeDeclarations.classList.add('d-none');
        dateDeclarations.classList.add('d-none');
        relevanceDeclarations.classList.add('d-none');

        // Show selected section
        if (selectedValue === 'type') typeDeclarations.classList.remove('d-none');
        else if (selectedValue === 'date') dateDeclarations.classList.remove('d-none');
        else if (selectedValue === 'relevance') relevanceDeclarations.classList.remove('d-none');
    });
}

if (correspondence) {
    const typeCorrespondence = document.getElementById('typeCorrespondence');
    const dateCorrespondence = document.getElementById('dateCorrespondence');
    const relevanceCorrespondence = document.getElementById('relevanceCorrespondence');

    correspondence.addEventListener('change', function () {
        const selectedValue = this.value;

        // Hide all sections
        typeCorrespondence.classList.add('d-none');
        dateCorrespondence.classList.add('d-none');
        relevanceCorrespondence.classList.add('d-none');

        // Show selected section
        if (selectedValue === 'type') typeCorrespondence.classList.remove('d-none');
        else if (selectedValue === 'date') dateCorrespondence.classList.remove('d-none');
        else if (selectedValue === 'relevance') relevanceCorrespondence.classList.remove('d-none');
    });
}