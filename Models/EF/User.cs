using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EjercicioCRUD.Models.EF
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public String Nombres { get; set; }

        [Required]
        [MaxLength(50)]
        public String Apellidos { get; set; }

        [Required]
        [MaxLength(50)]
        [Column("Identificación")]
        public String Identificacion { get; set; }

        [Required]
        [MaxLength(50)]
        public String Fecha_nacimiento { get; set; }

        [Required]
        [MaxLength(50)]
        public String Lugar_nacimiento { get; set; }

        [Required]
        [MaxLength(50)]
        public String Fecha_expedicion { get; set; }

        [Required]
        [MaxLength(50)]
        public String Rh { get; set; }

        [Required]
        [MaxLength(50)]
        public String Grupo_sanguineo { get; set; }

        public Boolean? requerido { get; set; }

    }
}