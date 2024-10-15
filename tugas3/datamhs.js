const dataMahasiswa = [
    {
      id: 1,
      nama: "Budi Santoso",
      tanggalLahir: "2000-01-15",
      fakultas: "Fakultas Ilmu Komputer",
      programStudi: "Teknik Informatika",
      semester: 6,
      nilai: {
        algoritma: 85,
        basisData: 88,
        pemrogramanWeb: 90,
      },
      aktif: true,
      organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman"],
    },
    {
      id: 2,
      nama: "Siti Aminah",
      tanggalLahir: "1999-05-10",
      fakultas: "Fakultas Ekonomi",
      programStudi: "Manajemen",
      semester: 4,
      nilai: {
        manajemenKeuangan: 78,
        akuntansi: 82,
        pemasaran: 75,
      },
      aktif: true,
      organisasi: ["Koperasi Mahasiswa"],
    },
    {
      id: 3,
      nama: "Rudi Hartono",
      tanggalLahir: "1998-12-01",
      fakultas: "Fakultas Teknik",
      programStudi: "Teknik Sipil",
      semester: 8,
      nilai: {
        mekanikaTanah: 85,
        strukturBangunan: 89,
      },
      aktif: false,
      organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
    },
  ];

  // 1.
  const mahasiswa = dataMahasiswa[0];
  const{nama,fakultas, programStudi, semester, nilai, organisasi, aktif, tanggalLahir} = mahasiswa;
  console.log(nama,fakultas, programStudi, semester, nilai, organisasi, aktif);

  //2.
  const{algoritma, basisData, pemrogramanWeb} = nilai;
  console.log(algoritma,basisData,pemrogramanWeb);

  //3. 
  const [primaryOrg, secondaryOrg] =  organisasi;
  console.log(primaryOrg,secondaryOrg);

  //4.
  const [...orgs] = organisasi;
  console.log(organisasi);

  //5.
  const updatedMahasiswa = {...mahasiswa, fakultas: "Fakultas Teknologi Informasi", semester : 7};
  console.log(updatedMahasiswa);

  //6.
  const getYear = tanggalLahir.split("-")[0];
  console.log(getYear)

  //7.
  const statusAktif = aktif ? "masih aktif" : "sudah tidak aktif";
  console.log(statusAktif);

  //8.
  const namaMahasiswa = dataMahasiswa.map((mhs) => mhs.nama);
  console.log(namaMahasiswa);

  //9.
  const mahasiswaTeknik = dataMahasiswa.filter((mhs) => mhs.fakultas === "Fakultas Ilmu Komputer" && mhs.aktif);
  console.log(mahasiswaTeknik);

  //10.
  const totalNilaiSemuaMahasiswa = dataMahasiswa.reduce((sum, mhs) => {
    const totalNilai = Object.values(mhs.nilai).reduce((acc,nilai) => acc + nilai, 0);
    return sum + totalNilai;
  }, 0)  

  console.log(totalNilaiSemuaMahasiswa);

  //11. 
  const sortedBySemester = dataMahasiswa.slice().sort((a,b) => a.semester - b.semester);
  console.log(sortedBySemester);

  //12.
  const newMahasiswa = {id: 4, nama : "Andi Setiawan", tanggalLahir :"2001-04-12", fakultas: "ilmu komputer", programStudi: "sistem informasi", semester: 2, nilai: {algoritma: 80, basisData: 82, pemrogramanWeb: 85},aktif: true,organisasi: ["Himpunan Mahasiswa SI"], };
  const dataMahasiswaUpdated = [...dataMahasiswa, newMahasiswa];
  console.log(newMahasiswa);
  console.log(dataMahasiswaUpdated);
  //13.
  const dataMahasiswaAfterDelete = dataMahasiswaUpdated.filter((mhs)=> mhs.id !==2);
  console.log(dataMahasiswaAfterDelete);
  const dataMahasiswaAfterUpdate = dataMahasiswaAfterDelete.filter((mhs)=> mhs.id ===1 ? {...mhs,semester: 7}:mhs);
  console.log(dataMahasiswaAfterUpdate)