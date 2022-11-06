package com.ramonserranoportfolio.RS.Repository;

import com.ramonserranoportfolio.RS.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}
