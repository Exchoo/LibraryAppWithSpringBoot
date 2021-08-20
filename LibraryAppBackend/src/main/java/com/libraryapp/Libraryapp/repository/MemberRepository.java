package com.libraryapp.Libraryapp.repository;

import com.libraryapp.Libraryapp.model.Manager;
import com.libraryapp.Libraryapp.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Long> {
    void deleteMemberById(Long id);
    Optional<Member> findMemberById(Long id);
}
