package com.Sudir_Industries.CricketBat.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Sudir_Industries.CricketBat.Entity.Cricket;

public interface CricketRepo extends JpaRepository<Cricket,Integer> {

}
